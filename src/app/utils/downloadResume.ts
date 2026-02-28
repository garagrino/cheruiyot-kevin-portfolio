export function downloadResume() {
  const link = document.createElement('a');
  link.href = '/Cheruiyot_Kevin_Resume.pdf';
  link.download = 'Cheruiyot_Kevin_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}