
### nginx常用配置
```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

# pid        logs/nginx.pid;

# 停止命令
# nginx -s stop
# 重启命令
# nginx -s reload
# 启动命令
# nginx

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    proxy_buffer_size 128k;
	proxy_buffers   32 128k;
	proxy_busy_buffers_size 128k;
    
    #跨域配置
    add_header Access-Control-Allow-Methods POST,GET,OPTIONS,DELETE;
    add_header Access-Control-Allow-Origin *; # 必须要有
    add_header Access-Control-Allow-Headers *; # 必须要有

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    # gzip  on;
                      
    server {
        listen       9091;
        server_name  127.0.0.1;
        client_max_body_size 100m;
        add_header Cache-Control no-store;

        location / {
            # proxy_pass http://172.31.30.32:6020/;
            proxy_pass http://172.31.30.33:6020/;
        }

        # location /sysapp/react/web/platform.html {
        #     proxy_pass http://localhost:3008/;
        # }

        location /sysapp/react/web/custom.html {
            proxy_pass http://localhost:3000/;
        }


	    # location /sysapp/react/web/tpm.html {
        #     proxy_pass http://localhost:3010/;
        # }

        # 主页
	    # location /home {
	    #     proxy_pass http://localhost:3008/home;
	    # }

        location /api/ {
            proxy_pass http://172.31.30.33:6020/;
        }
        location /static/js/bundle.js/ {
            proxy_pass http://localhost:3000/static/js/bundle.js;
        }
        location  ^~ /static/ {
            proxy_pass http://localhost:3000/static/;
        }
        
        location /manifest.json/ {
            proxy_pass http://localhost:3000/manifest.json;
        }
        location  ~ (.*\.chunk\.js) {
            proxy_pass http://localhost:3000/$1;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```