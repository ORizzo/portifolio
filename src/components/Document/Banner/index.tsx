function Banner({ backgroundColor }: { backgroundColor: string }) {
  return <div className={`w-full h-56 bg-${backgroundColor}`}></div>;
}

export { Banner };
