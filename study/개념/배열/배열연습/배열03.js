// --- 연습 2 ----

// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
// const companiesReversed = []

// while ((i = companies.pop()) !== undefined){
//     console.log(i)
//     companiesReversed.push(i)
// }

// console.log(companiesReversed)

// --- 연습 3 ---

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// const newFriends = [
//     {name: 'Ami', aage: 27, city: 'ulsan'},
//     {name: 'gracias', aage: 21, city: 'ulsan'},
// ]

// friends.splice(2,0,...newFriends)

// console.log(friends)

// --- 연습 4 --- 한나 사라 삭제 ---

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// friends.splice(4, 2)
// console.log(friends)

// --- 연습 5 --- 서울친구 삭제

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// // //filter 일때
// // const resetFriendsList = friends.filter((friend)=>{
// //     return friend.city !== 'seoul'
// // })
// // console.log(resetFriendsList)

// for(i=0; i<friends.length; i++){
//     if(friends[i].city === 'seoul'){
//         friends.splice(i,1)
//         i--
//     }
// }

// console.log(friends)

// --- 연습 6 --- 자기(30)보다 나이많은 친구 삭제 --- forEach 쓰지말자 그냥 for문 돌리자

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// for(i=0; i<friends.length; i++){
//     if(friends[i].age > 30){
//         friends.splice(i,1)
//         i--
//     }
// }

// console.log(friends)

// --- 연습 7 --- 영화 최신순으로 정렬하기

// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Terminator', release: '2007-04-11'},
//     {title: 'Dracula', release: '2007-04-13'},
//     {title: 'Jurassic Park', release: '2007-05-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// movies.sort((a,b)=>{
//     const yearA = a.release.substring(0,4) 
//     const yearB = b.release.substring(0,4)

//     // 오름차순 내림차순 return 값으로 결정
//     if(yearA > yearB){
//         return -1
//     }
//     if(yearA < yearB){
//         return 1
//     }
//     return 0
// })

// console.log(movies)