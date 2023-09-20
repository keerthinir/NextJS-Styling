import { Roboto } from 'next/font/google'

const roboto = Roboto ({
  // it can be different if we using other language
  subsets: ['latin'],
  //single font weight
  weight: '400',
 
})


export default function Home() {

  return (
    <div className='container'>
      {/* <h1 className={roboto.className}>Font optimization</h1> */}
      <h1 >Font optimization</h1>
      <h2 style={ roboto.style}>Font optimization with style</h2>

    </div>
  )
}
