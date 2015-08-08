###mac 无法复制文件到USR目录：
#http://tadaland.com/os-x-rootless.html
sudo nvram boot-args="rootless=0" 
sudo nvram boot-args="kext-dev-mode=1 rootless=0";sudo reboot

#修改完成之后恢复配置：
sudo nvram -d boot-args && sudo reboot
