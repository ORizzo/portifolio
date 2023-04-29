function Paragraph({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <div className="my-5 ">{children}</div>;
}

export { Paragraph };
