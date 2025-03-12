import logo from '../image/logo.jpg'
import recepiebox from '../image/recepiebox.png'
import Avatar from '../image/Avatar 35.png'
import searchIcon from '../image/search.png'

const Header = () => {
  var theli = 'p-2 text-gray-500';
  return (
    <div className='px-4 py-2 flex items-center justify-between shadow-md'>
      <img src={logo} className='' />
      <div className='relative'>
        <input type='text' className='w-[500px] bg-gray-200 p-2 rounded-md mr-4' placeholder='         what would you like to cook?'/>
        <img src={searchIcon} className='absolute w-[20px] top-[10px] left-[10px]' />
      </div>
      <ul className='flex items-center gap-2'>
        <li className={theli}>What to cook</li>
        <li className={theli}>Recepies</li>
        <li className={theli}>Ingredients</li>
        <li className={theli}>Occasions</li>
        <li className={theli}>About us</li>
      </ul>
      <button className='text-[#F44B87FF] bg-[#FEF0F5FF] flex items-center justify-center border-0 rounded-md gap-2 px-4 py-2 text-lg'>
        <img src={recepiebox} className='w-[30px]' alt="" />
        Your recepie box
      </button>
      <div className='w-[60px]'>
        <img src={Avatar} className='rounded-full' />
      </div>
    </div>
  )
}

export default Header
