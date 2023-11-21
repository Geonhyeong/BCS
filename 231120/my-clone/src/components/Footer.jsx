const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] h-[76px]">
      <div className="max-w-[1080px] mx-auto px-4 py-[22px] text-xs leading-4 text-[#646464]">
        <div>
          © DAK.GG. All Rights Reserved. Hosted by PlayXP Inc. Eternal Return
          and all related logos are trademarks of Nimble Neuron, inc. or its
          affiliates.
        </div>
        <ul className="flex gap-[6px] items-center">
          <li className=" hover:underline cursor-pointer">이용약관</li>
          <span class="h-[8px] w-[1px] bg-[#646464]"></span>
          <li className=" hover:underline cursor-pointer">개인정보취급방침</li>
          <span class="h-[8px] w-[1px] bg-[#646464]"></span>
          <li className=" hover:underline cursor-pointer">채용</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
