# starbucks

# 마크다운 알아보기 🧐

# 제목 사용하기

#을 기준으로 1~6까지 사용할 수 있음

<br/>

# 제목1

## 제목2

### 제목3

#### 제목4

##### 제목5

###### 제목6

<br/><br/>

# 문장

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세

<br/><br/>

# 띄어쓰기

### 스페이스바 2번

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세

### br태그 사용

동해물과 백두산이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세<br/>

<br/><br/>

# 강조

_이탤릭_  
**두껍게**  
_**이탤릭+두껍게**_  
~취소선~  
<u>밑줄</u>

<br/><br/>

# 목록

1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
   1. 순서가 필요한 목록(sub 들여쓰기 2번)
   1. 순서가 필요한 목록(sub 들여쓰기 2번)
1. 순서가 필요한 목록
1. 순서가 필요한 목록

<br/>

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록

<br/><br/>

# 링크(Link)

<!-- []() -->

### 마크다운 사용

[Starbucks](https://main--spiffy-salmiakki-c33a50.netlify.app/)  
[Starbucks](https://main--spiffy-salmiakki-c33a50.netlify.app/ 'Starbuck로 이동')

<!-- a태그 사용 -->

### a태그 사용

<a href="https://main--spiffy-salmiakki-c33a50.netlify.app">Starbucks</a>  
<a href="https://main--spiffy-salmiakki-c33a50.netlify.app" target="_blank">Starbucks</a>

<br/><br/>

# 이미지

![]()

### 이미지

![Starbucks](https://main--spiffy-salmiakki-c33a50.netlify.app/images/starbucks_logo.png)

### 이미지+링크

[![Starbucks](https://main--spiffy-salmiakki-c33a50.netlify.app/images/starbucks_logo.png)](https://main--spiffy-salmiakki-c33a50.netlify.app)

<br/><br/>

# 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는  
> 간접으로 따온 문장.  
> (네이버 국어사전)

<br/>

> 인용문을 작성하세요!
>
> > 중첩된 인용문
> >
> > > 중중첩된 인용문1  
> > > 중중첩된 인용문2  
> > > 중중첩된 인용문3

<br/><br/>

# 인라인 코드 강조

CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

<br/><br/>

# 블록 코드 강조

```html
<a href="https://main--spiffy-salmiakki-c33a50.netlify.app" target="_blank"
  >Starbucks</a
>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'aaa';
  return a;
}
```

```bash
$ git commit -m 'Message'
```

```plaintext
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
```

<br/><br/>

# 표(Table)

position 속성

```plaintext
-- 왼쪽정렬
:--: 가운데정렬
--: 우측정렬
```

| 값       |     의미     | 기본값 |
| -------- | :----------: | -----: |
| static   |  기준 없음   |      O |
| relative |  요소 자신   |      X |
| absolute | 위치 상 부모 |      X |
| fixed    |    뷰포트    |      X |

<br/><br/>

# 원시 HTML (Raw HTML)

동해물과 <u>백두산</u>이 마르고 닳도록 <br/>
<span style='text-decoration:underline;'>하느님</span>이 보우하사 우리나라 만세

링크  
<a href="https://main--spiffy-salmiakki-c33a50.netlify.app" target="_blank">Starbucks</a>

이미지  
<img width='70' src='https://main--spiffy-salmiakki-c33a50.netlify.app/images/starbucks_logo.png' alt='starbucks logo'/>

<br/><br/>

# 수평선

---

---

---

<br/><br/>

# Github 알아보기 😎

### macOS

```bash
  $ git config --global core.autocrlf input
```

<br/>

### Windows

```bash
  $ git config --global core.autocrlf true
```

<br/><br/>

## 사용자정보

### 커밋(버전 생성)을 위한 정보등록

```bash
  $ git config --global user.name 'YOUR_NAME'
  $ git config --global user.email 'YOUR_EMAIL'
```

<br/>

## 구성확인

### Q키를 눌러서 종료

```bash
  $ git confiig --global --list
```

<br/>
## 현재 프로젝트에서 변경사항 추적(버전관리)을 시작
```bash
  $ git init
```
<br/>

## 변경사항을 추적할 특정 파일(index.html)을 지정

```bash
  $ git add index.html
```

<br/>

## 모든 파일의 변경사항을 추적하도록 지정

```bash
  $ git add .
```

<br/>

## 메시지(-m)와 함께 버전을 생성

```bash
  $ git commit -m '프로젝트 생성'
```

<br/>

## 수정사항 발생한 파일 상태 확인

```bash
  $ git status
```

<br/>

## log 확인

```bash
  $ git log
```

<br/>

## branch 목록 확인

```bash
  $ git branch
```

<br/>

## 원격 저장소에 있는 브랜치 내용 확인

```bash
  $ git branch -a
```

<br/>

## signin branch 생성

```bash
  $ git branch signin
```

<br/>

## branch 변경

```bash
  $ git checkout signin
```

## 되돌리기

HEAD에서 한 버전 되돌리기

```bash
  $ git reset --hard HEAD~1
```

한 버전은 복구할 수 있음
## 원상복귀
```bash
  $ git reset --hard ORIG_HEAD
```

> 현업에서는 reset 주의해서 사용
<br/>
## branch명 변경하기
```bash
  $ git branch -m dev main
  $ git config --global init.defaultBranch main
```
<br/>

## gitignore를 나중에 만들었을때 파일/폴더 누락시키기
```bash
  $ git rm -r --cached .
```
<br/><br/>

---

<br/><br/>

# Git 브랜치 전략 - Git Flow

### main(master)
기본 / 메인 / 제품 브랜치
<br/><br/>


### dev(develop)
다음 제품 출시를 위해 여러 기능을 병합하는 브랜치
<br/><br/>


### feature/*
각 기능 개발을 위한 브랜치
<br/><br/>


### release
이번 제품 출시 직전 최종 테스트(QA)를 위한 브랜치
<br/><br/>


### hotfix
제품에 버그가 확인되었을 때 긴급 수정을 위한 브랜치
<br/><br/>

