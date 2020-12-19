export default (function () {
  const EnterKey = 'Enter';

  const table = document.querySelector('.table') || null;

  if (!table) {
    return;
  }

  const dateBtn = table.querySelector('#choose-date');
  const paymentBtn = table.querySelector('#payment');
  const date = table.querySelector('#date');
  const info = table.querySelector('#info');
  const samples = table.querySelector('#samples');
  const times = table.querySelector('#times');
  const labels = table.querySelectorAll('label');

  dateBtn.addEventListener('click', () => {
    date.style.display = 'inline';
    samples.style.display = 'flex';
    times.style.display = 'flex';
  });

  for (const labelCheck of labels) {
    labelCheck.addEventListener('click', () => {

      if (!labelCheck.control.disabled) {
        info.style.display = 'flex';
        paymentBtn.style.display = 'inline-block';
      }
    });

    labelCheck.addEventListener('keydown', (e) => {
      if (e.key === EnterKey) {
        labelCheck.click();
      }
    });
  }
});
