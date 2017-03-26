##透明度
#降低透明度

`defaults write com.apple.universalaccess reduceTransparency -bool true`

#恢复默认透明度    
`defaults write com.apple.universalaccess reduceTransparency -bool false`


##应用程序
#列出所有从AppStore下载的应用    
`find /Applications -path '*Contents/_MASReceipt/receipt' -maxdepth 4 -print |\sed 's#.app/Contents/_MASReceipt/receipt#.app#g; s#/Applications/##'`


##Safari浏览器
#打开「开发模式菜单」和「Web调试器」
```
defaults write com.apple.Safari IncludeInternalDebugMenu -bool true && \
defaults write com.apple.Safari IncludeDevelopMenu -bool true && \
defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true && \
defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled -bool true && \
defaults write NSGlobalDomain WebKitDeveloperExtras -bool true
```
#获取Safari浏览器当前打开页面的URL
`osascript -e 'tell application "Safari" to get URL of current tab of front window'`


##Xcode
#安装Xcode
xcode-select --install


##文件系统
#弹出挂载的所有磁盘/分区
osascript -e 'tell application "Finder" to eject (every disk whose ejectable is true)'

#查看所有挂载的磁盘/分区
diskutil list

#显示文件系统的使用情况
sudo fs_usage

#挂载/卸载磁盘镜像
hdiutil attach /path/to/diskimage.dmg
hdiutil detach /dev/disk2s1


##文本操作
#将(plain text, rich text and doc/docx)文件转换成HTML格式
textutil -convert html file.ext


##Finder
#将文件夹在Finder中设置成不可见
chflags hidden /path/to/folder/

#显示所有文件的扩展名
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

#显示所有的隐藏文件
defaults write com.apple.finder AppleShowAllFiles true

#恢复默认的文件可见性设置
defaults write com.apple.finder AppleShowAllFiles false

#在Finder中显示用户的Library目录
chflags nohidden ~/Library

#设置Finder的默认开启路径
defaults write com.apple.finder NewWindowTarget -string "PfLo" && \
defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}"

#在网络卷上不要自动创建 .DS_Store 这样的文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true

#在USB设备上不要自动创建 .DS_Store 这样的文件
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true


##打开
#在终端上(默认)用Safari浏览器打开URL
open http://www.github.com

#打开文件
open README.md

#打开应用(-a选项)
open -a "Google Chrome" http://www.github.com

#打开目录
open /path/to/folder/

#在Finder中打开当前目录
open .


##硬件信息
#查看所有硬件端口
networksetup -listallhardwareports

#查看剩余电量百分比
pmset -g batt | egrep "([0-9]+\%).*" -o --colour=auto | cut -f1 -d';'

#查看剩余电量可用时间
pmset -g batt | egrep "([0-9]+\%).*" -o --colour=auto | cut -f3 -d';'

#查看连接设备的UDID
system_profiler SPUSBDataType | sed -n -e '/iPad/,/Serial/p' -e '/iPhone/,/Serial/p'

#查看当前屏幕分辨率
system_profiler SPDisplaysDataType | grep Resolution

#禁至系统(在1小时内)休眠
caffeinate -u -t 3600

#查看所有的电源管理设置
sudo pmset -g

#在系统死机时自动重启
sudo systemsetup -setrestartfreeze on

#将音频文件转换成iPhone铃声的格式
afconvert input.mp3 ringtone.m4r -f m4af

#从文本文件中创建音频内容
say -v Alex -f file.txt -o "output.m4a"

#静音设置
osascript -e 'set volume output muted true'

#朗读
say 'All your base are belong to us!'

#查看dhcp信息
ipconfig getpacket en0

#清除DNS缓存
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder

#查看有哪些应用在使用80端口
sudo lsof -i :80

#查看本机IP
ipconfig getifaddr en0

#查看本机的外部IP
dig +short myip.opendns.com @resolver1.opendns.com

#加入Wifi网络
networksetup -setairportnetwork en0 WIFI_SSID WIFI_PASSWORD

#扫描所有的无线接入点
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
airport -s

#查看当前的SSID
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk '/ SSID/ {print substr($0, index($0, $2))}'

#显示Wifi连接历史
defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences | grep LastConnected -A 7

#包管理器
Homebrew
Fink
MacPorts

#文件/目录(安全)删除
srm /path/to/file
srm -r /path/to/folder/
srm -rf /path/to/complete/destruction

#执行AppleScript
osascript /path/to/script.scpt

#查看系统信息
sw_vers

#查看系统已开机时间
uptime

#剪贴板
pbcopy
pbpaste

#查看内存使用情况
vm_stat
vm_stat -c 10 1


##截屏
#延时截屏
screencapture -T 3 -t jpg -P delayedpic.jpg

#设置截屏文件的保存路径
defaults write com.apple.screencapture location ~/Desktop && \
killall SystemUIServer


##软件更新
sudo softwareupdate -ia
sudo softwareupdate -l
