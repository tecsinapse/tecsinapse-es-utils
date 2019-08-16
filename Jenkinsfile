@Library('tec-wolox-ci') _

(new PodTemplates())."defaultTemplate"("es-utils-deploy", 'prod') {
  node {

    checkout scm

    woloxCi('.woloxci/config.yml');
  }
}
