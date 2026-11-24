import Title from '../title/Title';

export const Footer = () => {
  return (
    <footer className="border-border-main relative z-10 mt-4 border bg-black p-4">
      <address className="not-italic">
        <Title level={3}>Для сотрудничества писать:</Title>
        <ul>
          <li>
            <a href="mailto:catty.spenns@gmail.com">catty.spenns@gmail.com</a>
          </li>
          <li>
            <a href="https://t.me/catty_spenns" target="_blank">
              Telegram
            </a>
          </li>
          <li>
            <a href=""></a>Max
          </li>
          <li>
            <a href="https://t.me/devillived8" target="_blank"></a>Разработчик сайта
          </li>
        </ul>
      </address>
    </footer>
  );
};
