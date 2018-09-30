
//styled-components 只引用自己需要的样式
import {injectGlobal} from 'styled-components'
injectGlobal`
    @font-face {font-family: "iconfont";
        src: url('iconfont.eot?t=1538037810272'); /* IE9*/
        src: url('iconfont.eot?t=1538037810272#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAARwAAsAAAAABsgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8kkg9Y21hcAAAAYAAAABLAAABcOdEtf5nbHlmAAABzAAAALwAAADQ87S9RWhlYWQAAAKIAAAALwAAADYTIrZhaGhlYQAAArgAAAAgAAAAJAg9A99obXR4AAAC2AAAAAgAAAAICF0AAGxvY2EAAALgAAAABgAAAAYAaAAAbWF4cAAAAugAAAAgAAAAIAEQAEtuYW1lAAADCAAAAUUAAAJtPlT+fXBvc3QAAARQAAAAIAAAADHX191teJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk0WecwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeyTyTYW7438AQw9zA0AAUZgTJAQDwwgxKeJxjYGBgZWBgYAZiHSBmYWBgDGFgZAABP6AoI1icmYELLM7CoARWwwISfybz/z+MBPJZwCQDIxvDKOABkzJQHjisIJiBEQBtYgnZAHicY2BhYPjfwBLH3MCgyGDGYMVgx8DAqKSmrqbEzodBK+sxqgsrCvMxssox2jGayzEamQEJY3NmRWZxO0ZWY1NlRmNBZeaLKnYiHNLsInae9sIc0hzC9p52IuzSHCJ2Kjb+jDuYnu1n9P/LJevh7y4r6+7nISvrocbG9mc3G5u6B+OKxYv/9bx4wbhcSZ6bW14JmWT0s2b0/7fR2k9ASoZRWkpKRgaIGf/JMj5mZJT+V/KfgZEBCADKkSeQeJxjYGRgYADisBwl9Xh+m68M3CwMIHD90k4jBP2/gSWOuQHI5WBgAokCABUHClIAeJxjYGRgYG7438AQwxLLwPD/P0scA1AEBTABAIHsBSQEAAAABF0AAAAAAAAAaAAAAAEAAAACAD8ABAAAAAAAAgAAAAoACgAAAP8AAAAAAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICJkYmRmYE9NzUvJTMxj4EBABQVAvk=') format('woff'),
            url('iconfont.ttf?t=1538037810272') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
            url('iconfont.svg?t=1538037810272#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-mendian:before { content: "\\e61c"; }
    
`