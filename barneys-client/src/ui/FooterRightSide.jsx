function FooterRightSide() {
  return (
    <div className="flex flex-col items-end p-4 text-sm text-stone-600">
      <div className="mb-1 flex space-x-4">
        <p className="cursor-pointer hover:underline">Terms and Agreement</p>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
      </div>
      <p className="w-full text-center sm:w-auto">© 2025 Barney's Burger</p>
    </div>
  );
}

export default FooterRightSide;
