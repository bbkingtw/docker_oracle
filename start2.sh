echo "start listener"
/u01/app/oracle/product/11.2.0/xe/bin/lsnrctl start

echo "start restart the service"
service oracle-xe restart

echo "ready to enter infinite loop"
while true; do sleep 1000; done
