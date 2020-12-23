import react from 'react'
import Card from "./Card"
function Service() {
  return (
    <>
      <div className="text-center my-5 display-4 animate__animated animate__bounce">Services</div>
      <div className="container ">
        <div className="row my-5">


          <div className="col-md-4">
            <Card 
              title="Web Development"
              img="https://s1.1zoom.me/prev/569/Laptops_Smartphone_Notebooks_Table_568319_600x400.jpg"
              content="We develop Amazing websites using Latest Framworks/Technologies in market,such as ReactJS"
            />

          </div>
          <div className="col-md-4">
            <Card 
              title="Android Development"
              img="https://i2.wp.com/makeskyblueusa.com/wp-content/uploads/2019/08/android-logo-icon-28.png?fit=600%2C400&ssl=1"
              content="We develop Amazing Apps using Latest Languages in market such as Kotlin and Java"
              />

          </div>
          <div className="col-md-4">
            <Card 
              title="IOS Development"
              img="data:image/jpeg;base64,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"
              content="We develop Amazing IOS Apps using Latest Framworks/Technologies in market"

            />

          </div>

        </div>
        
        <div className="row my-5 ">


          <div className="col-md-4 ">
            <Card 
              title="Windows App Development"
              img="https://mybroadband.co.za/news/wp-content/uploads/2015/06/Windows-10-logo.jpg"
              content="We develop Amazing Windows Application using Latest Framworks/Technologies in market"
            />

          </div>
          <div className="col-md-4 ">
            <Card 
               title="Macintosh App Development"
               img="https://i2.wp.com/thenextdigit.com/wp-content/uploads/2017/12/apple-logo.png?resize=600%2C400"
               
               content="We develop Amazing MAC Applications using Latest Framworks/Technologies in market"
            />

          </div>
          <div className="col-md-4 ">
            <Card
             title="ML Model Development" 
               img="https://s1.1zoom.me/prev/586/Laptops_Pencils_Notepad_Headphones_Smartphone_585511_600x400.jpg"
               content="We develop Amazing Machine Learning Models using Latest Framworks/Technologies in market"
             />

          </div>

        </div>
      </div>


    </>
  );
}

export default Service;
