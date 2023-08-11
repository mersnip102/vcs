export const CURRENT_USER = 'currentUser';
export const SECRET_KEY = 'Student_Management_CAT@2023$';
export const listMenu =[
  {
    permission: [
      
      // {
      //   screenName: 'Trang chủ',
      //   routerLink: 'pages/home',
      //   icon: 'home',
      // },
      
      {
        screenName: 'Dự án đầu tư',
        routerLink: '',
        icon: 'bank',
        children: [
          {
            screenName: 'Kế hoạch vốn',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Dự án đầu tư',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Giải ngân vốn đầu tư',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Quyết toán dự án đầu tư',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
         
  
        ]
  
      },
      {
        screenName: 'Kinh phí sự nghiệp',
        routerLink: '',
        icon: 'dollar',
        children: [
          {
            screenName: 'Kế hoạch vốn',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Nhiệm vụ',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Giải ngân kin phí sự nghiệp',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
          {
            screenName: 'Quyết toán kinh phí sự nghiệp',
            routerLink: 'ke-hoach-von',
            icon: '',
          },
         
  
        ]
  
      },
      // {
      //   screenName: 'Báo cáo dự án',
      //   routerLink: '',
      //   icon: 'form',
      //   children: [
      //     {
      //       screenName: 'Báo cáo dự án',
      //       routerLink: '',
      //       icon: '',
      //     },
      //     {
      //       screenName: 'Báo cáo dự án theo đơn vị',
      //       routerLink: '',
      //       icon: '',
      //     },
      //     {
      //       screenName: 'Báo cáo dự án theo đối tượng',
      //       routerLink: '',
      //       icon: '',
      //     },
      //     {
      //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
      //       routerLink: '',
      //       icon: '',
      //     },
      //     {
      //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
      //       routerLink: '',
      //       icon: '',
      //     },
  
      //   ]
  
      // },
      
      {
        screenName: 'Báo cáo dự án',
        routerLink: '',
        icon: 'form',
        
      },
      {
        screenName: 'Báo cáo tổng hợp',
        routerLink: 'bao-cao-tong-hop',
        icon: 'diff',
        
      },
      {
        screenName: 'Báo cáo hình ảnh',
        routerLink: '',
        icon: 'file-image',
        children: [
          {
            screenName: 'Báo cáo bằng hình ảnh',
            routerLink: '',
            icon: 'phone',
            children: [
              {
                screenName: 'Lập báo cáo',
                routerLink: 'bao-cao-hinh-anh/quan-ly-bao-cao',
                icon: '',
              },
              {
                screenName: 'Duyệt báo cáo',
                routerLink: 'bao-cao-hinh-anh/duyet-bao-cao',
                icon: '',
              },
              {
                screenName: 'Tra cứu báo cáo',
                routerLink: 'bao-cao-hinh-anh/tra-cuu-bao-cao',
                icon: '',
              },
  
            ]
          },
          // {
          //   screenName: 'Báo cáo số liệu',
          //   routerLink: 'chat-students',
          //   icon: 'phone',
          //   children: [
          //     {
          //       screenName: 'Lập báo cáo',
          //       routerLink: 'chat-students',
          //       icon: '',
          //     },
          //     {
          //       screenName: 'Tổng hợp báo cáo',
          //       routerLink: 'chat-students',
          //       icon: '',
          //     },
          //     {
          //       screenName: 'In các báo cáo',
          //       routerLink: 'chat-students',
          //       icon: '',
          //     },
  
          //   ]
          // },
          // {
          //   screenName: 'Báo cáo chỉ số',
          //   routerLink: 'chat-students',
          //   icon: 'phone',
          //   children: [
          //     {
          //       screenName: 'Báo cáo chi tiết',
          //       routerLink: 'chat-students',
          //       icon: '',
          //     },
          //     {
          //       screenName: 'Thống kê chỉ số',
          //       routerLink: 'chat-students',
          //       icon: '',
          //     }
  
          //   ]
          // },
          {
            screenName: 'Thống kê báo cáo',
            routerLink: 'chat-students',
            icon: 'phone',
            children: [
              {
                screenName: 'Thống kê số liệu',
                routerLink: 'chat-students',
                icon: '',
              },
              {
                screenName: 'Dashboard',
                routerLink: 'chat-students',
                icon: '',
              },
            ]
          },
  
        ]
      },
      {
        screenName: 'Quản lý đối tượng',
        routerLink: 'quan-ly-doi-tuong',
        icon: 'user',
        
      },
      {
        screenName: 'Quản lý thông báo chung',
        routerLink: 'quan-ly-thong-bao',
        icon: 'bell',
        
      },
      {
        screenName: 'Gán người dùng về ĐVHC',
        routerLink: 'gan-nguoi-dung-dvhc',
        icon: 'user-add',
        
      },
      {
        screenName: 'Quản lý log',
        routerLink: 'logs',
        icon: 'tool',
        
      },
      {
        screenName: 'Quản lý cấu hình',
        routerLink: 'configs',
        icon: 'setting',
        
      },
      
  
    ],
    defaultScreen: '/pages/home',
  },

{
  permission: [
    
    // {
    //   screenName: 'Trang chủ',
    //   routerLink: 'pages/home',
    //   icon: 'home',
    // },
    
    {
      screenName: 'Dự án đầu tư',
      routerLink: '',
      icon: 'bank',
      children: [
        {
          screenName: 'Kế hoạch vốn',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Dự án đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Giải ngân vốn đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Quyết toán dự án đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
       

      ]

    },
    {
      screenName: 'Kinh phí sự nghiệp',
      routerLink: '',
      icon: 'dollar',
      children: [
        {
          screenName: 'Kế hoạch vốn',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Nhiệm vụ',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Giải ngân kin phí sự nghiệp',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Quyết toán kinh phí sự nghiệp',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
       

      ]

    },
    // {
    //   screenName: 'Báo cáo dự án',
    //   routerLink: '',
    //   icon: 'form',
    //   children: [
    //     {
    //       screenName: 'Báo cáo dự án',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },

    //   ]

    // },
    
    {
      screenName: 'Báo cáo dự án',
      routerLink: '',
      icon: 'form',
      
    },
    {
      screenName: 'Báo cáo tổng hợp',
      routerLink: 'bao-cao-tong-hop',
      icon: 'diff',
      
    },
    {
      screenName: 'Báo cáo hình ảnh',
      routerLink: '',
      icon: 'file-image',
      children: [
        {
          screenName: 'Báo cáo bằng hình ảnh',
          routerLink: '',
          icon: 'phone',
          children: [
         
            {
              screenName: 'Duyệt báo cáo',
              routerLink: 'bao-cao-hinh-anh/duyet-bao-cao',
              icon: '',
            },
            {
              screenName: 'Tra cứu báo cáo',
              routerLink: 'bao-cao-hinh-anh/tra-cuu-bao-cao',
              icon: '',
            },
            

          ]
        },
        // {
        //   screenName: 'Báo cáo số liệu',
        //   routerLink: 'chat-students',
        //   icon: 'phone',
        //   children: [
        //     {
        //       screenName: 'Lập báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'Tổng hợp báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'In các báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },

        //   ]
        // },
        // {
        //   screenName: 'Báo cáo chỉ số',
        //   routerLink: 'chat-students',
        //   icon: 'phone',
        //   children: [
        //     {
        //       screenName: 'Báo cáo chi tiết',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'Thống kê chỉ số',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     }

        //   ]
        // },
        {
          screenName: 'Thống kê báo cáo',
          routerLink: 'chat-students',
          icon: 'phone',
          children: [
            {
              screenName: 'Thống kê số liệu',
              routerLink: 'chat-students',
              icon: '',
            },
            {
              screenName: 'Dashboard',
              routerLink: 'chat-students',
              icon: '',
            },
          ]
        },

      ]
    },
    {
      screenName: 'Quản lý đối tượng',
      routerLink: 'quan-ly-doi-tuong',
      icon: 'user',
      
    },
    {
      screenName: 'Quản lý thông báo chung',
      routerLink: 'quan-ly-thong-bao',
      icon: 'bell',
      
    },
    {
      screenName: 'Gán người dùng về ĐVHC',
      routerLink: 'gan-nguoi-dung-dvhc',
      icon: 'user-add',
      
    },
    {
      screenName: 'Quản lý log',
      routerLink: 'logs',
      icon: 'tool',
      
    },
    {
      screenName: 'Quản lý cấu hình',
      routerLink: 'configs',
      icon: 'setting',
      
    },
    

  ],
  defaultScreen: '/pages/home',
},
{
  permission: [
    
    // {
    //   screenName: 'Trang chủ',
    //   routerLink: 'pages/home',
    //   icon: 'home',
    // },
    {
      screenName: 'Kế hoạch thực hiện',
      routerLink: 'ke-hoach-thuc-hien',
      icon: 'profile',
    },
    {
      screenName: 'Phân bổ vốn',
      routerLink: 'phan-bo-von',
      icon: 'dollar',
    },
    {
      screenName: 'Giải ngân',
      routerLink: 'giai-ngan',
      icon: 'trademark',
    },
    {
      screenName: 'Báo cáo kết quả',
      routerLink: 'ket-qua-report',
      icon: 'bar-chart',
    },
    
    {
      screenName: 'Quyết toán',
      routerLink: 'quyet-toan',
      icon: 'safety-certificate',
    },
    {
      screenName: 'Báo cáo hình ảnh',
      routerLink: '',
      icon: 'file-image',
      children: [
        {
          screenName: 'Báo cáo bằng hình ảnh',
          routerLink: '',
          icon: 'phone',
          children: [
            {
              screenName: 'Lập báo cáo',
              routerLink: 'bao-cao-hinh-anh/quan-ly-bao-cao',
              icon: '',
            },
          

          ]
        },
        // {
        //   screenName: 'Báo cáo số liệu',
        //   routerLink: 'chat-students',
        //   icon: 'phone',
        //   children: [
        //     {
        //       screenName: 'Lập báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'Tổng hợp báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'In các báo cáo',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },

        //   ]
        // },
        // {
        //   screenName: 'Báo cáo chỉ số',
        //   routerLink: 'chat-students',
        //   icon: 'phone',
        //   children: [
        //     {
        //       screenName: 'Báo cáo chi tiết',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     },
        //     {
        //       screenName: 'Thống kê chỉ số',
        //       routerLink: 'chat-students',
        //       icon: '',
        //     }

        //   ]
        // },
        {
          screenName: 'Thống kê báo cáo',
          routerLink: 'chat-students',
          icon: 'phone',
          children: [
            {
              screenName: 'Thống kê số liệu',
              routerLink: 'thong-ke-so-lieu',
              icon: '',
            },
            {
              screenName: 'Dashboard',
              routerLink: 'chat-students',
              icon: '',
            },
          ]
        },

      ]
    },
    

    
   
    {
      screenName: 'Quản lý thông báo chung',
      routerLink: 'quan-ly-thong-bao',
      icon: 'bell',
      
    },
    {
      screenName: 'Quản lý nhắc việc',
      routerLink: 'test',
      icon: 'notification',
    },
    
    {
      screenName: 'Quản lý log',
      routerLink: 'logs',
      icon: 'tool',
      
    },
    {
      screenName: 'Quản lý cấu hình',
      routerLink: 'configs',
      icon: 'setting',
      
    },
    

  ],
  defaultScreen: '/pages/home',
},
{
  permission: [
    
    // {
    //   screenName: 'Trang chủ',
    //   routerLink: 'pages/home',
    //   icon: 'home',
    // },
    {
      screenName: 'Quản trị hệ thống',
      routerLink: '',
      icon: 'control',
      children: [
        {
          screenName: 'Quản lý đơn vị sử dụng',
          routerLink: 'don-vi-su-dung',
          icon: '',
        },
        {
          screenName: 'Quản lý người dùng riêng',
          routerLink: '',
          icon: 'team',
          children: [
            {
              screenName: 'Quản lý nhóm người dùng',
              routerLink: 'nhom-nguoi-dung',
              icon: '',
            },

            {
              screenName: 'Quản lý phân quyền',
              routerLink: 'quan-ly-phan-quyen',
              icon: '',
            },
          ]
        },
        {
          screenName: 'Quản lý nội dung nhắc việc',
          routerLink: '',
          icon: '',
          children: [

            {
              screenName: 'Cấu hình nhắc việc',
              routerLink: 'nhac-viec/cau-hinh-nhac-viec',
              icon: '',

            },
            {
              screenName: 'Cấu hình duyệt nhắc việc',
              routerLink: 'nhac-viec/duyet-nhac-viec',
              icon: '',

            },
            {
              screenName: 'Cấu hình xem nhắc việc',
              routerLink: 'nhac-viec/xem-nhac-viec',
              icon: '',
            },
            {
              screenName: 'Thống kê nhắc việc',
              routerLink: 'nhac-viec/thong-ke-nhac-viec',
              icon: '',
            },
          ]
        },
        {
          screenName: 'Quản lý dữ liệu dùng chung',
          routerLink: '',
          icon: '',
          children: [
            {
              screenName: 'Quản lý dữ liệu bản đồ',
              routerLink: '',
              icon: '',
            },
            {
              screenName: 'Quản lý dữ liệu văn bản',
              routerLink: '',
              icon: ''
            },
            {
              screenName: 'Quản lý dữ liệu dashboard',
              routerLink: '',
              icon: ''
            }
          ]
        },
        {
          screenName: 'Quản lý danh mục',
          routerLink: '',
          icon: 'unordered-list',
          children: [
            {
              screenName: 'Danh mục loại đối tượng',
              routerLink: 'danh-muc/loai-doi-tuong',
              icon: '',
            },
            {
              screenName: 'Danh mục đơn vị tính',
              routerLink: '',
              icon: '',

            },
            {
              screenName: 'Danh mục chức danh',
              routerLink: 'danh-muc/chuc-danh',
              icon: '',

            },
            {
              screenName: 'Danh mục nhiệm vụ',
              routerLink: 'danh-muc/nhiem-vu',
              icon: '',

            },
            {
              screenName: 'Danh mục sự kiện',
              routerLink: 'danh-muc/su-kien',
              icon: '',

            },
          ]
        },


      ]
    },
    {
      screenName: 'Dự án đầu tư',
      routerLink: '',
      icon: 'bank',
      children: [
        {
          screenName: 'Kế hoạch vốn',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Dự án đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Giải ngân vốn đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Quyết toán dự án đầu tư',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
       

      ]

    },
    {
      screenName: 'Kinh phí sự nghiệp',
      routerLink: '',
      icon: 'dollar',
      children: [
        {
          screenName: 'Kế hoạch vốn',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Nhiệm vụ',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Giải ngân kin phí sự nghiệp',
          routerLink: 'ke-hoach-von',
          icon: '',
        },
        {
          screenName: 'Quyết toán kinh phí sự nghiệp',
          routerLink: 'ke-hoach-von',
          icon: '',
        },

      ]

    },
    // {
    //   screenName: 'Báo cáo dự án',
    //   routerLink: '',
    //   icon: 'form',
    //   children: [
    //     {
    //       screenName: 'Báo cáo dự án',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },
    //     {
    //       screenName: 'Báo cáo dự án theo đơn vị và đối tượng',
    //       routerLink: '',
    //       icon: '',
    //     },

    //   ]

    // },
    
    {
      screenName: 'Báo cáo dự án',
      routerLink: '',
      icon: 'form',
      
    },
    {
      screenName: 'Báo cáo tổng hợp',
      routerLink: 'bao-cao-tong-hop',
      icon: 'diff',
      
    },
    
    {
      screenName: 'Quản lý đối tượng',
      routerLink: 'quan-ly-doi-tuong',
      icon: 'user',
      
    },
    {
      screenName: 'Quản lý thông báo chung',
      routerLink: 'quan-ly-thong-bao',
      icon: 'bell',
      
    },
    {
      screenName: 'Gán người dùng về ĐVHC',
      routerLink: 'gan-nguoi-dung-dvhc',
      icon: 'user-add',
      
    },
    {
      screenName: 'Quản lý log',
      routerLink: 'logs',
      icon: 'tool',
      
    },
    {
      screenName: 'Quản lý cấu hình',
      routerLink: 'configs',
      icon: 'setting',
      
    },
    

  ],
  defaultScreen: '/pages/home',
}
]


