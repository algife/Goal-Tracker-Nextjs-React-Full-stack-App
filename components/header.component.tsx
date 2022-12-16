// --------------------

interface Props {
  title: string;
}

// ---------------------

export default function Header({ title }: Props) {
  return (
    <header className="header">
      <h1 className="header_title">{title}</h1>

      {/*     
              inline css script comment 
      // !    FOR DEMO PURPOSES ONLY
      */}
      {/* <style jsx>
        {`
          .header_title {
            color: ${headerMode === 1 ? "navy" : "red"};
          }
        `}
      </style> */}
    </header>
  );
}
