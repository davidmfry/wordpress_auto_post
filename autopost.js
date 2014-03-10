var post_list ={
	post1:{title:"IHOP", video_id:83890307, category:4, },
	post2:{title:"Supercross Feud", video_id:87588695, category:5},
	post3:{title:"WA Beer", video_id:74949123, category:6},
	post4:{title:"Les Schwab/Season Premiere", video_id:75351970, category:7},
	post5:{title:"Hard Rock/Band In Seattle", video_id:84233062, category:8},
	post6:{title:"PIMA/Band in Seattle", video_id:80088916, category:9},
	post7:{title:"Vision Quest/Band In Seattle", video_id:80088903, category:5},
};



function addPost(title, video_id, category)
{
	document.getElementsByName('post_title')[0].value = title;
	document.getElementById("content").innerHTML = "[vimeo clip_id=" + video_id +  " width=720 height=404 ]";

	jQuery(function ($)
	{ 
		switch(category)
		{
			case 3:
				$("#in-category-3").prop("checked",true);
				break;
			case 4:
				$("#in-category-4").prop("checked",true);
				break;
			case 5:
				$("#in-category-5").prop("checked",true);
				break;
			case 6:
				$("#in-category-6").prop("checked",true);
				break;
			case 7:
				$("#in-category-7").prop("checked",true);
				break;
			case 8:
				$("#in-category-8").prop("checked",true);
				break;
			case 9:
				$("#in-category-9").prop("checked",true);
				break;
			default:
				break;
		}

		$("#publish").trigger("click");
		window.location = "http://www.cwseattlesales.com/wp-admin/post-new.php";

	});

}

for(key in post_list)
{
    for(key2 in post_list[key])
    {
        console.log(post_list[key][key2])
    }
}
