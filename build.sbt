import sbt._
import sbt.Keys._
import play.{PlayJava, Play}
import scala._

name := "front-end-rural-house"

organization := "com.rural.house"

version := "0.1.0"

scalaVersion := "2.11.6"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies ++= Seq(
  "com.google.code.gson" % "gson" % "2.3.1",
  "org.codehaus.jettison" % "jettison" % "1.1"
)