FROM alexeiled/docker-oracle-xe-11g

RUN sed -i 's/33817b96c0aa/abc/g' /u01/app/oracle/product/11.2.0/xe/network/admin/tnsnames.ora
RUN sed -i 's/33817b96c0aa/abc/g' /u01/app/oracle/product/11.2.0/xe/network/admin/listener.ora

ENV LD_LIBRARY_PATH /usr/local/lib

CMD /start.sh
