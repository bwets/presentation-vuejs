import console from "~/Framework/Console";

import AppLayout from './App/AppLayout';


import kycImage from "./Image/Image";
import Card from './Card/Card';
import Toolbar from './Toolbar/Toolbar';
import ToolbarButton from './Toolbar/ToolbarButton';

import LinkModal from "./Dialogs/LinkModal";
import Modal from "./Dialogs/Modal";
import Confirm from "./Dialogs/Confirm";

// Containers
import Container from "./Containers/Container";
import Scrollable from "./Containers/Scrollable";
import Page from "./Containers/Page";
import Accordion from "./Containers/Accordion";
import AccordionItem from "./Containers/AccordionItem";


// Forms
import Checkbox from './Forms/Checkbox';
import Textbox from './Forms/Textbox';
import Date from './Forms/Date';


import PropertyList from './Properties/PropertyList';
import PropertyItem from './Properties/PropertyItem';


import Wizard from './Wizard/Wizard';
import WizardPage from './Wizard/WizardPage';
import WizardAction from './Wizard/WizardAction';
import WizardInput from './Wizard/WizardInput';

import valuesInstaller from "./Values/Installer";


import directivesInstaller from "~/Framework/Directives";

import Vuetify from 'vuetify';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

function installVuetify(vue) {
	
	vue.use(Vuetify, {
		theme: {
			primary: "#2b337c",
			secondary: "#0491d4",
			accent: "#e3001b"
		}
	});

}

function installFontAwesome(vue) {
	library.add(fas);
	library.add(far);
	library.add(fab);
	library.add(fal);
	vue.component('fa-icon', FontAwesomeIcon);
}
export default {
	install: function (vue) {
		vue.use(console);
		installVuetify(vue);
		installFontAwesome(vue);

		vue.component("AppLayout", AppLayout);
		vue.component("Card", Card);
		vue.component("Toolbar", Toolbar);
		vue.component("ToolbarButton", ToolbarButton);
		vue.component("LinkModal", LinkModal);
		vue.component("Modal", Modal);
		vue.component("Confirm", Confirm);

		vue.component("Container", Container);
		vue.component("Scrollable", Scrollable);
		vue.component("Page", Page);
		vue.component("Accordion", Accordion);
		vue.component("AccordionItem", AccordionItem);
		

		vue.component("PropertyList", PropertyList);
		vue.component("PropertyItem", PropertyItem);

		vue.component("kycImage", kycImage);
		vue.component("kycWizard", Wizard);
		vue.component("kycWizardPage", WizardPage);
		vue.component("kycWizardAction", WizardAction);
		vue.component("kycWizardInput", WizardInput);

		// Forms
		vue.component("Checkbox", Checkbox);
		vue.component("Date", Date);
		vue.component("Textbox", Textbox);

		vue.use(valuesInstaller);
		vue.use(directivesInstaller);

	}
};

