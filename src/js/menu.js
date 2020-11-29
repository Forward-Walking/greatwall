import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import gourmet from '../MenuItems/gourmet.json';
import lunch from '../MenuItems/lunch.json';
import standard from '../MenuItems/standard.json';

export class Menu extends React.Component{

	render(){
		let final = []
		let tabList = [];		
		tabList.push(<Tab>Lunch</Tab>)
		tabList.push(<Tab>Gourmet</Tab>)
		tabList.push(<Tab>Standard</Tab>)
		final.push(<TabList>{tabList}</TabList>)

		let all = [lunch, gourmet, standard];
		for (var all_index in all){
			let menu = all[all_index];
			let categoryList = [];
			let content = [];
			for (var menu_index in menu){
				let categoryName = menu[menu_index]["name"];
				categoryList.push(<Tab>{categoryName}</Tab>);
				let tmp = [];
				for (var it in menu[menu_index]["items"]){
					var item = menu[menu_index]["items"][it]
					var chinese = item["chinese"]
					var name = item["name"]
					var price = item["price"]
					tmp.push(<tr><td></td><td>{chinese}</td><td>{name}</td><td>{price}</td></tr>)
				}
				content.push(<TabPanel><tbody>{tmp}</tbody></TabPanel>)
			}
			final.push(<TabPanel><Tabs forceRenderTabPanel><TabList>{categoryList}</TabList>{content}</Tabs></TabPanel>)
		}
		
		return (
			<Tabs forceRenderTabPanel defaultIndex={1}>
			{final}
			</Tabs>
		)
	}
}

export default Menu;