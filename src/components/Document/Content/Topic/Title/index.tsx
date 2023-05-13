function Title({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <h3 className="text-2xl font-semibold my-1">{children}</h3>;
}

export { Title };
