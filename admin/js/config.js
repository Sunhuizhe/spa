var app = {};

app.config = {
  'appContainer':'#admin',
  'panelContainer':'.admin-stage',
  'headerTitle':'匠人牛品管理后台'

};


app.menuData =[{
  'title':'门店管理',
  'icon':'abc',
  'items':[
    {
      'title':'门店列表',
      'url':'#/store-list'
    }
  ]
}, 

{'title':'活动管理',
  'icon':'abc',
  'items':[
    {
      'title':'首次关注送券',
      'url':'#/store-list'
    },
    {
      'title':'微信商品券',
      'url':'#/store-list'
    },
    {
      'title':'微信立减券',
      'url':'#/store-list'
    },
    {
      'title':'微信折扣券',
      'url':'#/store-list'
    }
  ]
},
{
  'title':'密码管理',
  'icon':'abc',
  'items':[
    {
      'title':'修改',
      'url':'#/password-change'
    }
  ]
}

];
