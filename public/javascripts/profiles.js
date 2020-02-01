
window.onload = function () {
    var profile = document.getElementById("profile")

    getProfiles();

    function getProfiles() {
        jQuery.ajax({
            url: "/api/profiles/",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res, status, jqXHR) {
                console.log(status);
                if (res.err) {
                    console.log(JSON.stringify(res));
                    return;
                }

                var profile_list = "";
                for (x in res) {

                    profile_list +=
                        "<ul>" + "Name: " + res[x].name + " </ul>" +
                        "<ul>" + "Age: " + res[x].age + " </ul>" +
                        "<ul>" + "Photo: " + "<img src='" + res[x].photo + "'" + " </ul>" +
                        "<ul>" + "Gender: " + res[x].gender + res[x].gender_symbol + "</ul>" +
                        "<ul>" + "Orientation: " + res[x].orientation + res[x].orientation_symbol + "</ul>" +
                        "<ul>" + "Religion: " + res[x].religion + res[x].religion_symbol+"</ul>" +
                        "<ul>" + "Nationality: " + res[x].nationality + res[x].nationality_symbol + "</ul>" +
                        "<ul>" + "Service: " + res[x].service + res[x].service_symbol + "</ul>" +
                        "<ul>" + "Status: " + res[x].status + "</ul>" +
                        "<ul>" + "Eye Color: " + res[x].eye_color + "</ul>" +
                        "<ul>" + "Last Changed: " + res[x].last_changed + "</ul>"
                }           

                profile.innerHTML = profile_list;

                current_data = res;

            },
            error: function (jqXHR, errStr, errThrown) {
                console.log(errStr);
            }
        })
    }
} //closing bracket for windows onload
