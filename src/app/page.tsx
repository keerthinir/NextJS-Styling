import Image from 'next/image'
import Person from "../../public/person.jpg"
import styles from "../../styles/home.module.css"
import Frame1 from "../../public/Frame1.png"
import Frame2 from "../../public/Frame2.png"
import Frame3 from "../../public/Frame3.png"
import Frame4 from "../../public/Frame4.png"


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <img src='/person.jpg' alt='' width="768" height="436"/> */}
{/* we are using path string here we need to specify width and height */}
{/* <Image src='/person.jpg' alt='' width="768" height="436"/> */}
     {/* <Image src={Person} alt=''  layout='fill'/> */}
     {/* layout > fixed, fill, intrinsic, responsive */}

      <Image
        fill
        alt=''
        src="/person.jpg"
      />
     {/* <Image src="/Frame1.png" alt='' width={200} height={100} layout='responsive'/>
     <Image src="/Frame2.png" alt='' width={200} height={100} layout='responsive'/>
     <Image src={Frame3} alt='' width={200} height={100} layout='responsive'/>
     <Image src={Frame4} alt='' width={200} height={100} layout='responsive'/> */}



    </main>
  )
}
