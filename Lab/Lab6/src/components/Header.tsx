import { useState } from "react";
import { Link } from "react-router-dom";

type Selected = 'home' | 'about' | 'news' | 'quiz' | 'contact';

function Header() {
  const [selected, setSelected] = useState<Selected>('home');

  // Pass the 'to' value directly to this function
  const handleSelected = (value: Selected) => () => {
    setSelected(value);
  }

  return (
    <>
      <div className="flex gap-2 bg-[#f3f4f6]">
        <Link onClick={handleSelected('home')} className={`leading-10 text-xl ${selected === 'home' ? 'font-semibold' : 'text-[#6b7280]'}`} to="/">Home</Link>
        <Link onClick={handleSelected('about')} className={`leading-10 ${selected === 'about' ? 'font-semibold' : 'text-[#6b7280]'}`} to="/about">About</Link>
        <Link onClick={handleSelected('news')} className={`leading-10 ${selected === 'news' ? 'font-semibold' : 'text-[#6b7280]'}`} to="/news">News</Link>
        <Link onClick={handleSelected('quiz')} className={`leading-10 ${selected === 'quiz' ? 'font-semibold' : 'text-[#6b7280]'}`} to="/quiz">Quiz</Link>
        <Link onClick={handleSelected('contact')} className={`leading-10 ${selected === 'contact' ? 'font-semibold' : 'text-[#6b7280]'}`} to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Header;