const dynamicResume = (options, themeOptions) => {
  return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Resume Builder</title>
    <style>
        .resume {
            width: 6.1in;
            height: 7.86in;
        }

        .box {
            background-color: white;
            width: 100%;
            height: 100%;
        }

        .left-side {
            color: white;
            width: 33%;
            height: 100%;
            background-color: ${options.cvCol};

        }

        .right-side {
            height: 100%;
            width: 65%;
            color: rgb(0, 0, 0);
        }

        .name {
            font-size: 1.5rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            text-decoration: underline;
        }

        .position {
            font-size: 1.3rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }

        .profile-image {
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;
        }

        .profile-image img {
            border-radius: 50%;
        }

        .heading-text {
            font-size: 1rem;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
        }

        .para,
        .per-info {
            font-size: 0.8rem !important;
            width: 90%;
        }

        .about .para{
            width: 93%;
        }
        .key-skills li{
            font-size: 0.7rem;
        }

        td, th{
            padding: 5px;
        }

    </style>

</head>

<body>
    <div class="resume border shadow d-flex align-items-center justify-content-center">
        <div class="box">
            <div class="left-side d-inline-block">
                <div class="profile-image">
                    <img class="img-fluid" src="/images/pfp.jpg">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact Details</div>
                    <p class="para mb-1">
                        ${options.phone} <br>
                        ${options.mob} <br>
                        ${options.email} <br>
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text text-uppercase">Skills</div>
                    <p class="para mb-1">
                        ${options.skill1} <br>
                        ${options.skill2} <br>
                        ${options.skill3} <br>
                        ${options.skill4} <br>
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text text-uppercase">Certifications</div>
                    <p class="para mb-1">
                        ${options.cert1} <br>
                        ${options.cert2}<br>
                        ${options.cert3}<br>
                        ${options.cert4}<br>
                    </p>
                </div>


                <div class="hobbies ml-2 mt-2">
                    <div class="heading-text text-uppercase">Projects</div>
                    <p class="para mb-1">
                        ${options.proj1} <br>
                        ${options.proj2} <br>
                        ${options.proj3} <br>
                        ${options.proj4} <br>
                    </p>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>
                <h3 class="position ml-3 my-2">${options.position}</h3>

                <div class="contact ml-3 mt-3">
                    <div class="heading-text text-uppercase">About Me</div>
                    <p class="para mb-1">
                    ${options.bio}
                    </p>
                </div>
                <div class="personal ml-3 mt-3">
                    <div class="heading-text text-uppercase">Work Experience</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>${options.wt1}</td>
                                <td>
                                    <b>${options.wp1}</b><br>
                                    ${options.wc1}<br>
                                    ${options.wd1}
                                </td>
                            </tr>
                            <tr class="border">
                                <td>${options.wt2}</td>
                                <td>
                                    <b>${options.wp2}</b><br>
                                    ${options.wc2}<br>
                                    ${options.wd2}
                                </td>
                            </tr>
                            <tr class="border">
                                <td>${options.wt3}</td>
                                <td>
                                    <b>${options.wp3}</b><br>
                                    ${options.wc3}<br>
                                    ${options.wd3}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="education ml-3 mt-3">
                    <div class="heading-text text-uppercase">Education</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>${options.et1}</td>
                                <td>
                                    ${options.ec1} <br>
                                    ${options.egpa1} <br>
                                    ${options.ein1}
                                </td>
                            </tr>
                            <tr class="border">
                                <td>${options.et2}</td>
                                <td>
                                    ${options.ec2} <br>
                                    ${options.egpa2} <br>
                                    ${options.ein2}
                                </td>
                            </tr>
                            <tr class="border">
                                <td>${options.et3}</td>
                                <td>
                                    ${options.ec3} <br>
                                    ${options.egpa3} <br>
                                    ${options.ein3}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>



                <!-- <div class="key-skills ml-3 mt-3">
                    <div class="heading-text text-uppercase">Key Skills</div>
                    <ul class="pl-1">
                        <li>Understanding accounting and financial principles</li>
                        <li>Computer literate and highly proficient in MS excel</li>
                        <li>Strong analytical and problem solving skills</li>
                        <li>Excellent interpersonal, cross-cultural</li>
                        <li>Encourating and inspiring to others</li>
                        <li>Verbal and written communications skill</li> -->

                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> -->

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>

</body>

</html>
    `;
};

module.exports = dynamicResume;
