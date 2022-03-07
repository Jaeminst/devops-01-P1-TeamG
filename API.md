# API Document

## 장바구니 조회

|카테고리| Method | Endpoint | 요청 바디
|:-:|:-:|:-:|:-:|
| 조회 | GET | /Carts | None

- 요청 HTTP
`GET http://localhost:3000/Carts`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 응답 Body 

> 상태코드 : 200
>
```javascript
[
  {
    "userId": "6220d89ea6e069ba6fcfe39c",
    "product": [{
        "id": "a220e2qeqqe069ba6fcfe391",
      	"name": "GoldRing",
	    "price": 20000,
        "stock": 50,
        "img": "https://images.unsplash.com/photo-313124283",
    "qty": 1
    }]
  }
]
```

> 상태코드 : 401
>
```javascript
{
  "Error": "사용자 인증에 실패하였습니다."
}
```


___

## 장바구니 추가

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 생성 | POST | /Carts | 포함 |

- 요청 HTTP
`POST http://localhost:3000/Carts`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 요청 Body
```javascript
[
  {
    "userId": "62235el3rj90wjfjk3w03jia",
    "productId": "r2qrewea6e0qwea6fcfe39c",
    "qty": 1
  }
]
```

- 응답 Body

> 상태코드 : 201
>
```
{ "cartId": "eq2rzd5ea6e069ba6fcfe39c"}
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```


___

## 장바구니 삭제

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 삭제 | DELETE | /Carts | 포함 |

- 요청 HTTP
`DELETE http://localhost:3000/Carts`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 요청 Body
```javascript
[
  {
    "cartId": "eq2rzd5ea6e069ba6fcfe39c"
  }
]
```

- 응답 Body

> 상태코드 200
>
```javascript
[
  {
    "userId": "6220d89ea6e069ba6fcfe39c",
    "product": [{
        "id": "a220e2qeqqe069ba6fcfe391",
      	"name": "GoldRing",
	    "price": 20000,
        "stock": 50,
        "img": "https://images.unsplash.com/photo-313124283",
    "qty": 1
    }]
  }
]
```

> 상태코드 : 204
>
```
{
  "product": null,
  "ok": 1
}
```


___

## 장바구니 상품 수량 변경

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 변경 | PATCH | /Carts | 포함 |

- 요청 HTTP
`PATCH http://localhost:3000/Carts`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 요청 Body
```javascript
{
  "cartId": "eq2rzd5ea6e069ba6fcfe39c",
  "qty": 2
}
```

- 응답 Body

> 상태코드 : 200
>
```javascript
{
  "qty": 2
}
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```


___


## 상품 목록 조회

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 조회 | GET | /products | None |


- 요청 HTTP
`GET http://localhost:3000/products`

- 응답 Body

> 상태코드 200
>
```javascript
[
    {
        "_id": "622198479f7ff16f7a25cc05",
        "name": "gold_ring",
        "price": 10000,
        "stock": 30,
        "tag": "goldring",
        "img": "https://media.thejewellershop.com/images/products/VR0209_01.jpg"
    },
    {
        "_id": "6221998e9f7ff16f7a25cc06",
        "name": "silver_ring",
        "price": 8000,
        "stock": 40,
        "tag": "silverring",
        "img": "https://img.joomcdn.net/e3dc678d68a8885e90648d9b59e4cc2acb210118_original.jpeg"
    },
]
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```


___

## 개별 상품 목록 조회

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 조회 | GET | /products/:_id | None |


- 요청 HTTP
`GET http://localhost:3000/products/a220e2qeqqe069ba6fcfe391`

- 응답 Body

> 상태코드 : 200
>
```javascript
{
  "id": "a220e2qeqqe069ba6fcfe391",
  "name": "SilverRing",
  "price": 20000,
  "stock": 50,
  "img": "https://images.unsplash.com/photo-313124283",
  "tag": "Ring"
}
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```

___

## 장바구니 결제

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 생성 | POST | /cartsOrders | 포함 |

- 요청 HTTP
`POST http://localhost:3000/orders`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 요청 Body
```javascript
{
  "userId": '6220d89ea6e069ba6fcfe39c',
  "carts": [{
    "userId": "6220d89ea6e069ba6fcfe39c",
    "productId": "622198479f7ff16f7a25cc05",
    "qty": 1
  },
  {
    "userId": "6220d89ea6e069ba6fcfe39d",
    "productId": "6221998e9f7ff16f7a25cc06",
    "qty": 1
  },
  {
    "userId": "6220d89ea6e069ba6fcfe39e",
    "productId": "62219a199f7ff16f7a25cc07",
    "qty": 1
  }]
}
```

- 응답 Body

> 상태코드 : 201
>
```
{ "orderId": "ifm930wi90fe0624a6fce21a1"}
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```

___

## 상품 바로 결제

|카테고리| Method | Endpoint | 요청 바디 |
|:-:|:-:|:-:|:-:|
| 생성 | POST | /directOrders | 포함 |

- 요청 HTTP
`POST http://localhost:3000/orders`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 요청 Body
```javascript
{
  "userId": "6220d89ea6e069ba6fcfe39c",
  "productId": "62231a1aa5173f4665a52685",
  "qty": 1
}
```

- 응답 Body

> 상태코드 : 201
>
```
{ "orderId": "f3wnofhwhf93hw9ufhddjmi"}
```

> 상태코드 : 404
>
```
{ "Error": "Not Found"}
```


## 결제 내역 조회

|카테고리| Method | Endpoint | 요청 바디
|:-:|:-:|:-:|:-:|
| 조회 | GET | /orders | None

- 요청 HTTP
`GET http://localhost:3000/orders`

- 요청 Head
```javascript
{
  authorization: 'basic n09qnv28jqde829que892q9eu2q8jed892'
}
```

- 응답 Body 

> 상태코드 : 200
>
```javascript
{
  "ordersId": "6220d89ea6e069ba6fcfe39c"
}
```

> 상태코드 : 404
>
```javascript
{
  "Error": "Not Found"
}
```
