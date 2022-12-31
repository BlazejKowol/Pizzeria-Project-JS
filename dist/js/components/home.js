import { templates, select } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initActions();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.templateHome();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.services = thisHome.dom.wrapper.querySelector(select.containerOf.servicesWrapper);
  }

  initActions(){
    const thisHome = this;

    thisHome.dom.services.addEventListener('click', function(event){
      event.preventDefault();
      //debugger;

      let pageId = event.target.offsetParent.getAttribute('id-type');
      console.log('page id: ', pageId);
      if(pageId) {
        thisHome.app.activatePage(pageId); 
        //console.log('page id', pageId);
      }
    });
  }
}

export default Home;