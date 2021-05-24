import React from 'react';
import Home from './Home/Home'
function Profile() {
      return (
            <div>
                  <div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<Home
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUBOmo640nBJ031qg7aM-PG4xhFx8EIZAJJA3XT5wymTVZ8hYGTV7SzY_NMJ4f-4k5rM&usqp=CAU" 
                   name="Khalil Djaariri" 
                   title="Khalil Djaariri" 
                   age="Unknown" 
                   city="Algeria" 
                   name_skill_1="Python" 
                   skill_1="60%" 
                   name_skill_2="PHP" 
                   skill_2="65%" 
                   name_skill_3="JavaScript" 
                   skill_3="60%" 
                   name_skill_4="MySQL" 
                   skill_4="65%" 
                   backgroundColor="#000" 
                   color="#fff"/>
			<br></br>

                  <Home 
                  src="https://pbs.twimg.com/media/DoNRT-IXcAAEBKt.jpg" 
                  name="Jordi L Anonim"  
                  title="Jordi L Anonim" 
                  age="Unknown" 
                  city="Algeria" 
                  name_skill_1="Python" 
                  skill_1="60%" 
                  name_skill_2="JavaScript" 
                  skill_2="5%" 
                  name_skill_3="PHP" 
                  skill_3="20%" 
                  name_skill_4="FRONT-END" 
                  skill_4="90%"  
                  backgroundColor="rgb(1 10 117)" 
                  color="lime"/>
                  <br></br>

                  <Home 
                  src="https://scontent.fczl2-1.fna.fbcdn.net/v/t1.6435-9/131416167_867558430649222_7885479398744374078_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=tWmWlfoLt6wAX95Mhd0&_nc_ht=scontent.fczl2-1.fna&oh=ebab2b0e68000d1b9a1891a6078c018c&oe=60CDC65E" 
                  name="Badr Lord"  
                  title="Badr Lord" 
                  age="Unknown" 
                  city="Morocco"  
                  name_skill_1="Python" 
                  skill_1="20%" 
                  name_skill_2="Terminal" 
                  skill_2="90%" 
                  name_skill_3="Google-Dork" 
                  skill_3="100%" 
                  name_skill_4="WordPress" 
                  skill_4="200%" 
                  backgroundColor="rgb(0,0,0)" 
                  color="lime"/>
          
            </div>
      );
}

export default Profile

