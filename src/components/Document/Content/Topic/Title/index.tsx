function Title({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <div className="text-2xl font-semibold my-1">{children}</div>;
}

export { Title };
