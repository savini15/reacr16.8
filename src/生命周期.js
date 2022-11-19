// react 
//1.initialization
   //a.setup props and state
//2.mounting
   //A.componentwillmount 在组件即将被挂载到页面上
    //render
    //componentDidMount

//3.udating
   //情景一  props发生变化 (比state改变时多执行一个周期函数componentWillReceiveProps)
     //componentWillReceiveProps  在以下条件执行
         //1.要从父组件接收参数
          //2.如果该组件第一次存在于父组件中，则不会执行
          //3.如果这个组件之前已存在于父组件中才会执行
   //情景二  state发生变化
   //公共执行的方法
     //shouldComponentUpdate  //返回true 或者false 判断组件是否需要更新  在组件数据更新的时候（props或者state发上变化的时候）
     //componentWillUpdate   //组件被更新之前执行，在shouldComponentUpdate 之后执行，如果shouldComponentUpdate返回true才会执行
     //render 
     //coponentDidUpdate  //组件更新完后执行
    
//4.unmounting  卸载组件
   //componentWillUnmount  
