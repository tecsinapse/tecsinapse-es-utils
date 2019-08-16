@Library('tec-wolox-ci') _

(new PodTemplates())."defaultTemplate"("es-utils-deploy", 'prod') {
  node("es-utils-deploy") {

    checkout scm

    woloxCi('.woloxci/config.yml');
  }
}
