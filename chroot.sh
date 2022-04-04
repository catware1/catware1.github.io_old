#
# личный скрипт чрутинга в генту
#

mkdir /mnt/gentoo
mount /dev/nvme0n1p5 /mnt/gentoo
mount /dev/nvme0n1p6 /mnt/gentoo/boot
cd /mnt/gentoo
mount --rbind /dev /mnt/gentoo/dev 
mount -t proc /proc /mnt/gentoo/proc 
mount --rbind /sys /mnt/gentoo/sys 
mount --rbind /tmp /mnt/gentoo/tmp 
cp /etc/resolv.conf /mnt/gentoo/etc 
chroot . /bin/bash 
env-update && . /etc/profile 
PS1='\[\e[0;97;48;5;238m\] [CHROOT] \[\e[0;97;48;5;239m\]\u\[\e[0;48;5;240m\] \[\e[0;48;5;235m\] \[\e[0;97;48;5;235m\]\H\[\e[0;48;5;235m\] \[\e[0;48;5;251m\] \[\e[0;38;5;232;48;5;251m\]\w\[\e[0;48;5;251m\] \[\e[0;97;48;5;25m\] \[\e[0;48;5;25m\]\#\[\e[0;48;5;25m\] \[\e[0;48;5;234m\] \[\e[0;97;48;5;234m\]\A\[\e[0;48;5;234m\] \[\e[0;48;5;88m\] \[\e[0;97;48;5;88m\]\$\[\e[0;38;5;88;48;5;88m\] \[\e[0m\] \[\e[0m\]'
