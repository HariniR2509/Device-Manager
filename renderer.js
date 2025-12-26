async function refresh() {
  const devices = await window.api.scanDevices();
  const table = document.getElementById('deviceTable');
  table.innerHTML = '';

  devices.forEach(d => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${d.port}</td>
      <td>${d.vid}</td>
      <td>${d.pid}</td>
      <td>${d.known ? 'Known Device' : 'New Device'}</td>
      <td><input value="${d.name}" /></td>
      <td><input value="${d.notes}" /></td>
      <td><button>Save</button></td>
    `;

    row.querySelector('button').onclick = () => {
      const inputs = row.querySelectorAll('input');
      window.api.saveDevice({
        port: d.port,
        vid: d.vid,
        pid: d.pid,
        name: inputs[0].value,
        notes: inputs[1].value
      });
    };

    table.appendChild(row);
  });
}

refresh();
