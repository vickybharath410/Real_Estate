// import "./App.css";
// import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CommonPage from "../CommonPage";
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetails";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
import PropertyListingPage from "../PropertyListingPage";
import PropertyNav from "./PropertyNav";


function Form() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    "property" : "",
    "length" : "",
    "breadth" : "",
    "area" : "",
    "mobile" : ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const navStep = (navValue) => {
    
    setstep(navValue);
  }


  const handleInputData = input => e => {
    setFormData({...formData,[input]: e.target.value})
  }
  const {firstName, area, mobile} = formData


  switch (step) {
       case 1:
      return (
         <CommonPage>
          
          <div className="form-elements">
          <PropertyNav step={step} navStep={navStep} />
            <BasicInfo nextStep={nextStep} HandleFormData={handleInputData} values={formData} />

          </div>
          </CommonPage>
        
      );
        case 2:
      return (
        <CommonPage>
        
        <div className="form-elements">
        <PropertyNav step={step} navStep={navStep}/>
          <PropertyDetail nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={formData} />
        
  </div>
  </CommonPage>
        
      );
         case 3:
        return (
          <CommonPage>
          
          <div className="form-elements">
          <PropertyNav step={step} navStep={navStep}/>
            <GeneralInfo nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={formData} />
          
    </div>
    </CommonPage>
          
        );
           case 4:
        return (
          <CommonPage>
         
          <div className="form-elements">
          <PropertyNav step={step} navStep={navStep}/>
            <LocationInfo nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={formData} />
          
    </div>
    </CommonPage>
          
        );
        case 5:
            return (
              // <CommonPage>
              <div className="form-elements">
                
                <PropertyListingPage values={formData} />
              
        </div>
        // </CommonPage>
              
            );
        
        default: 
  
  }
}

export default Form;