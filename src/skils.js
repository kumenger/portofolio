import SkillsComponent from './SkillsCOmponent';
const Skills=()=>{
  return ( <div className="row aboutme ">


    <SkillsComponent title={'FrontEnd'} skills={[

       {src: 'https://img.icons8.com/color/48/000000/react-native.png', skilltype: 'React'},
       {src: 'https://img.icons8.com/ios-filled/50/000000/javascript-logo.png', skilltype:'javascript'},
        {src: 'https://img.icons8.com/color/48/000000/bootstrap.png', skilltype:'boostrap'},
        {src: 'https://img.icons8.com/color/48/000000/redux.png', skilltype: 'Redux'},
        {src: 'https://img.icons8.com/ios-filled/50/null/jquery.png', skilltype: 'jquery'},
        {src: 'https://img.icons8.com/ios/50/null/css.png', skilltype: 'css'},
        {src: 'https://img.icons8.com/color/48/null/material-ui.png', skilltype: 'material-ui'},
        
       
        
      
      
        ]}/>
    
    
    <SkillsComponent title={'BackEnd'} skills={[
      {src: 'https://img.icons8.com/color/48/000000/nodejs.png', skilltype: 'Node'}, 
     
     {src: 'https://img.icons8.com/color/48/null/mongoose.png', skilltype: 'mongoose'}, 
      {src: 'https://img.icons8.com/color/48/000000/graphql.png', skilltype: 'Grapgiql'},
    
      {src: 'https://img.icons8.com/nolan/64/express-js.png', skilltype: 'Express.js'},
      {src: 'https://img.icons8.com/ios/50/null/api-settings.png', skilltype: 'API'}
      
      
      ]}/>{"  "}
        <SkillsComponent title={'DataBase and more...'} skills={[
        {src: 'https://img.icons8.com/ios-filled/50/null/mysql.png', skilltype: 'Mysql'},
        {src: 'https://img.icons8.com/color/48/000000/mongodb.png', skilltype: 'MongoDb'},
        {src: 'https://img.icons8.com/color/48/000000/json--v1.png', skilltype: 'Json'}, 
        {src: 'https://img.icons8.com/color/48/000000/git.png', skilltype: 'Git'},
        {src: 'https://img.icons8.com/color/48/000000/amazon-web-services.png', skilltype: 'AWS'},
        {src: 'https://img.icons8.com/ios-filled/50/null/github.png', skilltype: 'GitHub'}
     
      ]}/>
    
   

    <div className="col-1">

      <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node"/>

    </div>

    <div className="col-1">
      <img icons src="https://img.icons8.com/color/48/000000/react-native.png"/>

    </div>
    <div className="col-1">

      <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>

    </div>
    <div className="col-1">

      <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>

    </div>
    <div className="col-1">

      <img src="https://img.icons8.com/ios/50/000000/typescript.png"/>
    </div>
    <div className="col-1">
      <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
    </div>
    <div className="col-1">   <img src="https://img.icons8.com/color/48/000000/json--v1.png"/></div>
    <div className="col-1"><img src="https://img.icons8.com/color/48/000000/git.png"/></div>
    <div className="col-1"><img src="https://img.icons8.com/color/48/000000/graphql.png"/></div>
    <div className="col-1"><img src="https://img.icons8.com/color/48/000000/redux.png"/></div>
    <div className="col-1"><img src="https://img.icons8.com/color/48/000000/docker-container.png"/></div>
    <div className="col-1"><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"/></div>

  </div>);
};
export default Skills;
