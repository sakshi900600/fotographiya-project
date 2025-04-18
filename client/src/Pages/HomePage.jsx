import React from 'react'
import Header from './Header/Header'
import Grid from '../Components/Grid/Grid'
import Footer from './Footer/Footer'
import { ceremonies } from '../data'
import styles from './HomePage.module.css' 
import vector2 from '../assets/images/Vector.png'
import vector1 from '../assets/images/Vector2.png'

const HomePage = () => {


  
  // for testing scroll bar
  const ceremonies = [
    {
      title: "HALDI",
      images: Array(40).fill().map((_, i) => ({
        id: `haldi-${i}`,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6lBuw0i_FKto5a7FFLGOCtLfmVw_soUAOw&s"
        
      }))
    },
    {
      title: "MEHNDI",
      images: Array(40).fill().map((_, i) => ({
        id: `mehndi-${i}`,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt6Vm1QGdmYkVfx5fohzm5h5rz0Wian0N0w&s"
      }))
    },
    {
      title: "WEDDING",
      images: Array(40).fill().map((_, i) => ({
        id: `wedding-${i}`,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TKbb68TBHNuMGeWRiTtVeoMjjaKRGNfm2Q&s"
      }))
    }
  ];



  return (
    <div>

      <Header />

      <div className={styles.backgroundVectors}>
        <img 
          src={vector1} 
          alt="Top decoration" 
          className={styles.topRightVector} 
        />
        <img 
          src={vector2} 
          alt="Bottom decoration" 
          className={styles.bottomLeftVector} 
        />
      </div>      
      
      
      {ceremonies.map((ceremony) => (
        <Grid 
          key={ceremony.title}
          title={ceremony.title} 
          images={ceremony.images} 
        />
      ))}

      <Footer />
      
    </div>
  )
}

export default HomePage
