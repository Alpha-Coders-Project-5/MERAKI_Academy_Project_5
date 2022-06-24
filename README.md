<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png" alt="Project logo"></a>
</p>

<h3 align="center">Faceclone</h3>

---

<p align="center">Connect with friends and the world around you on Facebook.

</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [User Story](#user_story)
- [Data FLow](#data_flow)
- [Guided By](#guided_by)

## 🧐 About <a name = "about"></a>

Are you looking to connect with your friends and share posts for free? join now on Faceclone,it's a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don’t know, online. It allows users to share pictures and posts, as well as their own thoughts and opinions with however many people they like.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

<ul> 
<li>Google Chrome follow this <a href="https://www.google.com/chrome/?brand=YTUH&gclid=Cj0KCQjw-JyUBhCuARIsANUqQ_J7AcKOz_ZB4YBpjpv4KM1TS3p0O6WgYN8FuyxB-V4yyJBH6I-KpKYaAme7EALw_wcB&gclsrc=aw.ds/">link </a> to install. </li>
<li>Visual Studio Code follow this <a href="https://code.visualstudio.com/">link </a> to install. </li>
<li>Git Bash follow this <a href="https://git-scm.com/downloads">link </a> to install.</li>
<li>MySQL follow this <a href="https://www.mysql.com/">link </a> to install.</li> 
<li>Node.js follow this <a href="https://nodejs.org/en/">link </a> to install. </li>
</ul>

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Clone repo to your local machine using git bash

```
git clone https://github.com/Alpha-Coders-Project-5/MERAKI_Academy_Project_5
```

2. Install packages repeat this step in backend and frontend folders

```
npm i or npm install
```

3. Create .env file and put inside it DB_URI and SECRET

```
DB_NAME=FacebookClone
SECRET=AlphaCoders
```

4. Run server inside backend folder using git bash

```
npm run dev
```

5. Run application inside front folder using git bash

```
npm start
```

## 🎈 Usage <a name="usage"></a>

1.Home page when you open the app
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dviqtfdwx/image/upload/v1655587960/Home_page_obkuil.png" alt="Result site">
<br>

2.If you clicked on Create new account button Register popup appear
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dviqtfdwx/image/upload/v1655587948/Register_page_rugi0a.png" alt="Result site">
<br>

3.Tab on Logo or Home icon tab to view the dashboard page
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656082654/dashboard_tab_jbm2gx.png" alt="Result site">
<br>

4.profile tab to view the profile section .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656082845/profile_vdp5zy.png" alt="Result site">
<br>

5.post tab to open post popup .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083115/Post_part_1_gzshg8.png" alt="Result site">
<br>

6.add photo (green arrow), remove photo (red arrow), add post (blue arrow) .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083115/post_part2_cuhb2g.png" alt="Result site">
<br>

7.three dots tab to update or delete post .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083497/three_dots_mky38n.png" alt="Result site">
<br>

8.Update cover tab (red arrow) to update cover picture and update profile picture (blue arrow) .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083746/profile_picrures_mwnqn1.png" alt="Result site">
<br>

9.Edit details tab to update user info .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083939/details_edit_crv5tf.png" alt="Result site">
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656083996/edit_info_popup_w0pghn.png" alt="Result site">
<br>

10.See all friends tab to show all your friends and you can click on your friend picture and name to visit his page .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084173/see_all_friends_oajl6k.png" alt="Result site">
<br>
you can unfollow your friends from here
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084174/friends_popup_ac4ob8.png" alt="Result site">
<br>

11. Live Search tab to seach for the users.
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084480/search_bar_lamnhf.png" alt="Result site">
Search result, here you can follow and unfollow users and visit users pages
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084479/search_result_follow_fth5ll.png" alt="Result site">
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084480/search_result_unfollow_c720zz.png" alt="Result site">
<br>

12.Userprofile page to view other user info, friends, posts and follow and unfollow this user.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656084806/User_profile_gi14un.png" alt="Result site">

<br>

13.comment tab (red arrow) to will take you to comment textarea (green arrow), show all comments (blue arrow) to view all comments on the post.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085111/Comment_oesnip.png" alt="Result site">
<br> 
after adding the comment you can update or delete it.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085112/comment_actions_zcb62z.png" alt="Result site">
<br>

14.Like tab to Like and unlike the post.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085541/Like_xvqsup.png" alt="Result site">
<br> 
after Like the post the user will got notification and can click on mark as read to clear notifications.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085541/notification_wmx5v7.png" alt="Result site">
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085541/noti_popup_vctpkc.png" alt="Result site">
<br>

15.contacts area will show you online and offline friends.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085770/contacts_o5h5zg.png" alt="Result site">
<br> 

16.tab on friends in contact area to show chatbox.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656085859/chatbox_louqay.png" alt="Result site">
<br>

17.When send message the targeted user will get notification about who messaged him.
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656086110/chat_noti_qmeqvl.png" alt="Result site">
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656086109/chat_popup_kleiks.png" alt="Result site">
<br>
when opening the chat box you can view the recieved message and you can reply and start chat.
<br>
first user Chat
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656086432/Phill_chat_mlctsi.png" alt="Result site">
<br>
second user Chat
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656086432/Jane_chat_jnnlvh.png" alt="Result site">
<br>

18.Logout tabto sign out from accout .
<br>
<img width=400px height=200px src="https://res.cloudinary.com/dtiuiyrdu/image/upload/v1656086547/logout_n2qjk5.png" alt="Result site">
<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [ MySQL](https://www.mysql.com/) - Database
- [Express JS](https://expressjs.com/) - Server Framework
- [React JS](https://https://reactjs.org/) - Web Framework
- [Node JS](https://nodejs.org/en/) - Server Environment

## User Story <a name = "user_story"></a>

- You can open my Trello <a href="https://trello.com/b/ttEcDBxL/project-5">link </a> to see how this project got developed.

## Data FLow <a name = "data_flow"></a>

<img width=400px height=200px src="https://res.cloudinary.com/dviqtfdwx/image/upload/v1655589784/schema_pxgunz.png" alt="data flow">

## ⚠️ Guided By <a name = "guided_by"></a>

This project is guided by ©️ **[MERAKI Academy](https://www.meraki-academy.org)**
