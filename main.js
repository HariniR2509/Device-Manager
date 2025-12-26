const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');
const Store = require('electron-store').default;

const store = new Store();

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

/* IPC: Scan devices */
ipcMain.handle('scan-devices', async () => {
  const ports = await SerialPort.list();
  const saved = store.get('devices', []);

  return ports.map(p => {
    const known = saved.find(
      d => d.vid === p.vendorId && d.pid === p.productId
    );

    return {
      port: p.path,
      vid: p.vendorId || 'N/A',
      pid: p.productId || 'N/A',
      status: 'Connected',
      known: !!known,
      name: known?.name || '',
      notes: known?.notes || ''
    };
  });
});

/* IPC: Save device */
ipcMain.handle('save-device', (event, device) => {
  let devices = store.get('devices', []);
  const index = devices.findIndex(
    d => d.vid === device.vid && d.pid === device.pid
  );

  const record = {
    ...device,
    lastSeen: new Date().toISOString()
  };

  if (index >= 0) {
    devices[index] = record;
  } else {
    devices.push(record);
  }

  store.set('devices', devices);
  return true;
});
