const Footer = () => {
  return (
    <footer className="sticky top-[100vh] my-4 flex w-full items-center justify-center px-4 text-center">
      <p className="text-xs">
        Made by{' '}
        <a className="underline" href="mailto:matt@mkalo.dev">
          me
        </a>{' '}
        using{' '}
        <a className="underline" href="https://redwoodjs.com/">
          RedwoodJS
        </a>
        . Source code available on{' '}
        <a className="underline" href="https://github.com/Mkalo/my-portfolio">
          Github
        </a>
        .<br />
        Mkalo.dev © 2020 - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
