# starbucks

# 개행문자(Newline)설정
## macOS
$ git config --global core.autocrlf input

## Windows
$ git config --global core.autocrlf true

# 사용자정보
## 커밋(버전 생성)을 위한 정보등록
$ git config --global user.name 'YOUR_NAME'
$ git config --global user.email 'YOUR_EMAIL'

# 구성확인
## Q키를 눌러서 종료
$ git confiig --global --list

# 현재 프로젝트에서 변경사항 추적(버전관리)을 시작
$ git init

# 변경사항을 추적할 특정 파일(index.html)을 지정
$ git add index.html

# 모든 파일의 변경사항을 추적하도록 지정
$ git add .

# 메시지(-m)와 함께 버전을 생성
$ git commit -m '프로젝트 생성'

# 

