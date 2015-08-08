###mac 无法复制文件到USR目录：
#http://tadaland.com/os-x-rootless.html
sudo nvram boot-args="rootless=0" 

#修改完成之后恢复配置：
sudo nvram -d boot-args && sudo reboot
