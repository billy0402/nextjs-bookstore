export function enterEvent(
  event: React.KeyboardEvent<HTMLElement>,
  callback: (event: React.KeyboardEvent<HTMLElement>) => void,
) {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  callback(event);
}
