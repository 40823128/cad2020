var tipuesearch = {"pages": [{'title': '40823128', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '40823128.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': 'W1', 'text': '1.利用大一所學使用cmsimde建立網站 \n 2.下載fall2020_cp.7z壓縮檔，並解壓縮至cad2020資料夾 \n 3.搜尋git windows下載64位元，解壓縮並放入已建立的PortableGit資料夾中 \n 4.將start放入小白框中修改以下圖框所示路徑 \n \n 5.設定gitconfig，並存入home資料夾中，儲存後重新啟動start \n 6.到Github建立名稱為cad2020的新倉儲(以下圖所示) \n \n 7.git clone新倉儲的網址，clone後至小黑框git submodule add \n 8.複製資料夾cmsimde中up_dir資料夾內檔案至cad2020中(以下圖所示) \n   \n 9.下載pip install flask flask_cors bs4 markdown pelicon leo \n 10.進入cmsimde資料夾中，將wsgi.py放入小白框tools go複製下圖螢光標註網址並搜尋開啟動態網頁 \n \n 11.輸入密碼進入 \n 12.開啟小黑框push所有東西步驟依照以下順序 \n (1)Y:\\cd tmp \n (2)Y:\\tmp>cd cad2020 \n (3)Y:\\tmp\\cad2020>git add. \n (4)Y:\\tmp\\cad2020>git commit -m "網站建立" \n (5)Y:\\tmp\\cad2020>git push \n (6)輸入學號、密碼 \n (7)網站建立完成 \n', 'tags': '', 'url': 'W1.html'}]};