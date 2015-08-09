#1 Command Line Tools
```bash
xcode-select --install
```

#2 Getting it on in OS X
创建一个目录 mcrypt ，接下来的操作都需要在这个目录下进行
下载 [Get libmcrypt 2.5.8 from Sourceforge](http://sourceforge.net/projects/mcrypt/files/Libmcrypt/2.5.8/libmcrypt-2.5.8.tar.gz/download)
下载 [Get the php code in a tar.gz](http://php.net/downloads.php)
下载完之后解压上述文件到 mcrypt

#3 编译安装
```bash
cd ~/mcrypt 
cd libmcrypt-2.5.8 
./configure
make
sudo make install
```

#4 Install autoconf – some more Terminal heavy lifting:
```bash
cd ~/mcrypt
curl -O http://ftp.gnu.org/gnu/autoconf/autoconf-latest.tar.gz
tar xvfz autoconf-latest.tar.gz
cd autoconf-2.69/
./configure
make
sudo make install
```

#5 Compile mcrypt php Extension 
这里根据PHP代码下载的版本选择路径
*第二行 需要写全路径*
```bash
cd ../php-5.x.x/ext/mcrypt/
/usr/bin/phpize 
// 下面这句后面追加系统的PHP环境路径，具体啥用我也不知道
./configure  --with-php-config
make
sudo make install 
```
#6 在PHP.INI文件中增加 ```extension=mcrypt.so``` 即可
如果没有php.ini 文件：
```bash
sudo cp /etc/php.ini.default /etc/php.ini
sudo chmod u+w  /etc/php.ini
```

#7 参考链接：http://coolestguidesontheplanet.com/install-mcrypt-php-mac-osx-10-10-yosemite-development-server/
