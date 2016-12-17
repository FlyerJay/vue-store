import App from "../App"
export default[
	{
		path:"/",
		component:App,
		children:[
			{
				path:"/index",
				component:resolve => require(["../modules/index"],resolve)
			},
			{
				path:"/entrance",
				component:resolve => require(["../modules/entrance"],resolve)
			}
		]
	}
]