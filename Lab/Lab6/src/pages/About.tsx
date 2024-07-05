function About() {
  return (
  <div className="">
    <img src="images2/slide3.jpg" className="block w-full" alt="..." />
    <div >
        <ul className='flex gap-2 justify-evenly'>
            <li>
                <img src='/images2/menu-01.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-02.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-03.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-04.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-05.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-06.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-07.jpg' className='rounded-full'></img>
            </li>
            <li>
                <img src='/images2/menu-08.jpg' className='rounded-full'></img>
            </li>
        </ul>
    </div>
    <h1 className='mt-3' style={{ color: "red", textAlign: 'start' }}>This is About Page</h1>
  </div>  );
}

export default About;