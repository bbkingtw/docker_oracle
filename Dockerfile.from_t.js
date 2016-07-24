#FROM oracle-t.js
FROM alexeiled/docker-oracle-xe-11g.js

ENV LD_LIBRARY_PATH /usr/local/lib
ENV ORACLE_HOME /u01/app/oracle/product/11.2.0/xe

CMD ["/u01/app/oracle/product/11.2.0/xe/bin/lsnrctl","start"]

COPY start2.sh start2.sh
#CMD chmod +x start2.sh

COPY start3.sh start3.sh
RUN chmod +x start3.sh

CMD /start2.sh
#ENTRYPOINT /start2.sh
